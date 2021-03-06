import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import { FaUpload } from 'react-icons/fa';

import api from '../../services/api';

import { Container } from './styles';

export default function Dropzone({ onFileUploaded }) {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const data = new FormData();

    data.append('file', file);

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);

    async function uploadImage() {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };

      const response = await api.post('files', data, config);

      onFileUploaded(response.data.id);
    }

    uploadImage();
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />
      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Recipe Thumbnail" />
      ) : (
        <p>
          <FaUpload size={20} />
          Imagem da sua receita
        </p>
      )}
    </Container>
  );
}

Dropzone.propTypes = {
  onFileUploaded: PropTypes.func.isRequired,
};

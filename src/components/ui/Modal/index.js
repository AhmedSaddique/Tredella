"use client"
import React, { useState } from 'react';
import {  Modal } from 'antd';
import Button from '../Button/Button';

const ModalView = ({title,className,content}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

    return (
        <>
        <div className={`cursor-pointer ${className}`} onClick={showModal}>
        {title}
        </div>
      <Modal width={1000} title="" footer="" open={isModalOpen}  onCancel={handleCancel}>
        {content}
      </Modal>
        </>
    );
};

export default ModalView;

import { useState } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/reset.css';
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseOver = () => {
    const x = Math.floor(Math.random() * 300) - 150;
    const y = Math.floor(Math.random() * 300) - 150;
    setPosition({ x, y });
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div>
      <h1>Você vai dar o tobs?</h1>
    </div>
    <div>
    <Button className="button" type="primary" onClick={handleButtonClick}>
      Sim
    </Button>
    <Button
      className="escape-button"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onMouseEnter={handleMouseOver}
    >
      Não
    </Button>

    <Modal
      title="Obrigado!"
      open={isModalOpen}
      onOk={closeModal}
      onCancel={closeModal}
      centered
      footer={[
        <Button key="submit" type="primary" onClick={closeModal}>
          Fechar
        </Button>,
      ]}
    >
      <p>Muito obrigado pela preferência</p>
    </Modal>
    </div>
    </>
  );
}

export default App;

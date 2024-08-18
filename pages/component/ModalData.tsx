
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export interface dataPropsType {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface ModalDataProps {
    dataApi?: dataPropsType; 
  }

export default function ModalData({dataApi}:ModalDataProps){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Button onClick={handleOpen}>INFO 1</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Los datos para el id {dataApi?.id} son:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           El id: {dataApi?.id}
           <br></br>
           El título: {dataApi?.title}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
import { Dialog, IconButton } from '@mui/material';
import {
  ColumnModalFormInput,
  IconCrossWrapper,
  IconClose,
} from '../UI/ModalCulumn.styled';
import { Formik, Form, Field } from 'formik';
import { ModalContent, ModalTitle } from '../NeedHelp/NeedHelpModal.styled';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import noPhotoUser from '../../../../src/images/noImage-user2x.jpg';
import {
  AddAvatar,
  IconPlus,
  IconPlusAvatar,
  ModalButton,
} from './ModalEditProfile.styled';
import {
  addUserAvatar,
  fetchCurrentUser,
  updateUserData,
} from 'store/AsyncThunk/asyncThunkUsersAuth';

const ModalEditProfile = ({ createOpenModalShow, isCreateOpenModal, user }) => {
  const [imageFile, setImageFile] = useState(null);
  const [userAvatar, setUserAvatar] = useState(user?.avatarURL || noPhotoUser);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('********');

  const dispatch = useDispatch();
  const MAX_FILE_SIZE = 4 * 1024 * 1024;

  const handleFileUpload = event => {
    const file = event.target.files[0];

    if (file && file.size <= MAX_FILE_SIZE) {
      setImageFile(file);
    } else {
      console.error('File size exceeds the maximum limit of 4 megabytes.');
      event.target.value = null;
    }
  };

  useEffect(() => {
    if (imageFile) {
      setUserAvatar(URL.createObjectURL(imageFile));
    } else {
      setUserAvatar(user?.avatarURL || noPhotoUser);
    }
  }, [imageFile, user?.avatarURL]);

  const userData = { name: "Oleg", email: "oleh1111@mail.com", password: "********" }
  console.log(userData)

  const onSubmit = async values => {
    createOpenModalShow();
    if (imageFile) {
      await dispatch(addUserAvatar(imageFile));
    }
    dispatch(updateUserData(userData));
    dispatch(fetchCurrentUser());
  };

  const handleCloseModal = () => {
    createOpenModalShow(false);
  };

  const initialValues = {
    name: user?.name || '',
    email: user?.email || '',
    password: '********',
  };
  
  return (
    <div>
      <Dialog open={isCreateOpenModal} onClose={createOpenModalShow}>
        <ModalContent>
          <ModalTitle>Edit profile</ModalTitle>

          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
              <AddAvatar>
                <input
                  type="file"
                  id="file-input"
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
                <label htmlFor="file-input">
                  <IconButton color="primary" component="span">
                    <img
                      src={userAvatar}
                      alt="user-avatar"
                      style={{ width: 68, height: 68, borderRadius: '8px' }}
                    />
                    <IconPlusAvatar>
                      <IconPlus />
                    </IconPlusAvatar>
                  </IconButton>
                </label>
              </AddAvatar>

              <Field
                value="Oleg"
                type="text"
                name="name"
                placeholder={user ? user.name : 'name'}
                as={ColumnModalFormInput}
                // onChange={(e) => setName(e.target.value)}
              />
              <Field
                value="oleh1111@mail.com"
                type="email"
                name="email"
                placeholder={user ? user.email : 'email'}
                as={ColumnModalFormInput}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <Field
                value="********"
                type="password"
                name="password"
                placeholder="password"
                as={ColumnModalFormInput}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <ModalButton type="submit">Send</ModalButton>
            </Form>
          </Formik>

          <IconCrossWrapper onClick={handleCloseModal}>
            <IconClose />
          </IconCrossWrapper>
        </ModalContent>
      </Dialog>
    </div>
  );
};

export default ModalEditProfile;

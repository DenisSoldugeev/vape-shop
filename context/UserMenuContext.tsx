'use client';
import { createContext, FC, ReactNode, useState } from 'react';

interface UserMenuContext {
  isMenuOpen: boolean;
  toggleModal: () => void;
}
export const UserMenuContext = createContext<UserMenuContext>({
  isMenuOpen: false,
  toggleModal: () => {},
});

interface ModalProviderProps {
  children: ReactNode;
}

export const UserMenuProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <UserMenuContext.Provider value={{ isMenuOpen, toggleModal }}>
      {children}
    </UserMenuContext.Provider>
  );
};

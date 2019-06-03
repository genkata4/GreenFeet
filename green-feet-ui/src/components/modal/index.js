import React from 'react';
import PropTypes from 'prop-types';
import { ClickOutside } from '..';
import { ModalHeaderFooter } from './ModalHeaderFooter';
import { ModalBody } from './ModalBody';

const SizeEnum = {
    SMALL: 'small',
    MEDIUM: '',
    LARGE: 'large',
};

export const Modal = ({ isOpen, onClose, size, children, header, footer, className, headerClassName, bodyClassName, footerClassName, ...rest }) => {
    if (!isOpen) {
        return null;
    }

    const sizeClassName = size ? `Modal__content--${size}` : '';

    return (
        <div {...rest} className={`Modal ${className}`}>
            <ClickOutside active={isOpen} onTrigger={onClose} className={`Modal__content ${sizeClassName}`}>

                <ModalHeaderFooter onClose={onClose} className={headerClassName}>
                    {header}
                </ModalHeaderFooter>

                <ModalBody className={bodyClassName}>
                    {children}
                </ModalBody>

                <ModalHeaderFooter className={footerClassName}>
                    {footer}
                </ModalHeaderFooter>

            </ClickOutside>
        </div>
    );
};

Modal.size = SizeEnum;

Modal.defaultProps = {
    className: '',
    headerClassName: '',
    bodyClassName: '',
    footerClassName: '',
    size: '',
    header: null,
    children: null,
    footer: null,
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    className: PropTypes.string,
    headerClassName: PropTypes.string,
    bodyClassName: PropTypes.string,
    footerClassName: PropTypes.string,
    header: PropTypes.node,
    children: PropTypes.node,
    footer: PropTypes.node,
    size: PropTypes.oneOf(Object.values(SizeEnum))
};

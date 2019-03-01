// import React from 'react' 
import { Modal } from 'antd';

export function info(title, content) {
  Modal.info({
    title: title,
    content: content,
  });
}

export function success(title, content) {
  Modal.success({
    title: title,
    content: content,
  });
}

export function error(title, content) {
  Modal.error({
    title: title,
    content: content,
  });
}

export function warning(title, content) {
  Modal.warning({
    title: title,
    content: content,
  });
}

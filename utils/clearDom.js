const clearDom = () => {
  document.querySelector('#order-container').innerHTML = '';
  document.querySelector('#item-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;

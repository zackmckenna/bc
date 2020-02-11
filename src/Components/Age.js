import React from 'react'

const Age = () => {
  function getAge( dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age * 365
}
  return (
    <h2>{getAge('1991/7/14')}</h2>
  )
}

export default Age

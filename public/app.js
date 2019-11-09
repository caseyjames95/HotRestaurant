



document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault()
  
  let name = document.getElementById('name').value
  let email = document.getElementById('phone').value
  let phone = document.getElementById('email').value

  let table = {
    name: document.getElementById('name').value,
    email: document.getElementById('phone').value,
    phone: document.getElementById('email').value
  }
  axios.post('./table', table)
  .then(res => {
    console.log(table)
    
    })
    .catch(e => console.log(e))
  
  document.getElementById('name').value = ''
  document.getElementById('phone').value = ''
  document.getElementById('email').value = ''

})

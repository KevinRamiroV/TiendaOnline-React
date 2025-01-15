import  ErrorNotFound from '../assets/img/404notfound.png'

const Error = () => {
  return (
      <div className="error-container">
        <img src={ErrorNotFound} alt="" className='img-error' />
        <h2 style={{fontWeight: "bold"}}>Error 404, Page Not Found</h2>
      </div>
  )
}

export default Error
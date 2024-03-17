
const NotFound = () => {
  return (
    <div className="container">
        <div className="jumbotron text-center mt-5">
            <h1 className="display-4">404 Not Found</h1>
            <p className="lead">Sorry, the page you are looking for could not be found.</p>
            <hr className="my-4" />
            <p>Go back to <a href="/" className="btn btn-theme btn-lg">Homepage</a></p>
        </div>
    </div>
  )
}

export default NotFound
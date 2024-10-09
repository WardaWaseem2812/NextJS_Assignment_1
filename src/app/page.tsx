import cssstyle from "./home.module.css"

const Homepage = () => {
  return(
    <div>
      <ul>
        <li>Home</li>
        <li><a href= "/about" target ="_blank">About</a></li>
        <li><a href= "/contact" target ="_blank">Contact</a></li>
        <li><a href= "/service" target ="_blank">Service</a></li>
        
      </ul>
      <h1 className={cssstyle.home}>This is Home Page</h1>
    </div>
          )
}
export default Homepage;
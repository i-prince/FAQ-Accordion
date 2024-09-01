import './App.css'

function App() {

  return (
  <div className='major'>

    <div className='mbody'>
    
      <h1> 
        <img className='img1' src='public/Project-Guidelines/assets/images/icon-star.svg'></img>
        FAQs
      </h1>

      <h3 className='img2'>
        What is Frontend Mentor and how will it help me?
        <img src='src/assets/icon-minus.svg'></img>
      </h3>

      <p>
        Frontend mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and Javascript. It's suitable for all levels and ideal for portfolio building.
      </p>

      <div className='dropdown'>
        <h3 className='drop1'>
          Is Frontend mentor free?
          <img src='public/Project-Guidelines/assets/images/icon-plus.svg'></img>
        </h3>
        <div className='drop-content'>
              <p>Yes, Frontend Mentor offers free challenges. However, there are also premium challenges available for subscribers.</p>
            </div>

        <h3 className='drop2'>
          Can I use Frontend mentor projects in my portfolio?
          <img src='public/Project-Guidelines/assets/images/icon-plus.svg'></img>
        </h3>
        <div className='drop-content'>
              <p>Yes, you can use Frontend Mentor projects in your portfolio to showcase your skills.</p>
        </div>

        <h3 className='drop3'>
          How can i get help if I am stuck in a challenge?
          <img src='public/Project-Guidelines/assets/images/icon-plus.svg'></img>
        </h3>
        <div className='drop-content'>
              <p>You can ask for help in the Frontend Mentor community or refer to the solutions provided.</p>
        </div>
        
      </div>

    </div>
    

  </div>
  )

}
export default App

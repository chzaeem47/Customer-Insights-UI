import Navbar from './componets/navbar'
import LeftHalf from './componets/leftHalf'
import RightHalf from './componets/rightHalf'

const App = () => {
  return (
    
       <div className="min-h-screen bg-white overflow-hidden">
       <Navbar />
      
        <div className="flex flex-row items-start justify-between px-16 mt-12 w-full">
        
        <LeftHalf />

        <div className="flex flex-row gap-6 items-center overflow-x-auto w-3/5 no-scrollbar py-4 w-226 relative bottom-7 right-2">
          <RightHalf
            img="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688"
            num="1"
            title="Satisfied"
          />
          <RightHalf
            img="https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            num="2"
            title="Engaged"
          />
          <RightHalf
            img="https://plus.unsplash.com/premium_photo-1683121489634-5d3f7892a6fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            num="3"
            title="Prospects"
          />
          <RightHalf
            img="https://plus.unsplash.com/premium_photo-1682141308411-29d7662447cb?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            num="4"
            title="At-Risk"
          />
          <RightHalf
            img="https://images.unsplash.com/photo-1517701221265-7da25447217b?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            num="5"
            title="Retention"
          />
        </div>

      </div>
    </div>
  )
}

export default App
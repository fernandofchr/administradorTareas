import React from 'react'
import Footer from '../AppBar'

function TareasPrincipales() {
    return (
        <>
        
          <>
          <Footer userGroups={"administrador"}/>
          <div className='container pt-3 pb-4 min-vh-100'>
            <div className='d-flex flex-column' style={{ marginBottom: '1rem' }}>
              <div className="pb-4">
                < div className='d-flex justify-content-center'>
                  {/* <Graficos/>               */}
                </div>
              </div>
            </div>
          </div>
          </>
        </>
      )
}

export default TareasPrincipales
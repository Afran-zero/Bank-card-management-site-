import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'

const Home = () => {
  const loggedIn ={ firstName: "John"};
  return (
    <section className="home" >

      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting" 
          title="Welcome "
          user={loggedIn?.firstName || 'guest'}
          subtext="Acesss your account" 
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.3}
          
          
          />
        </header>
        
      </div>
    </section>
  )
}

export default Home 
import logo from '../../assets/logo.png'
import coin from '../../assets/dollar.png'


const Header = () => {
    return (
        <div className="flex justify-between items-center mx-12">
        {/* image */}
        <div>
          <img src={logo} />
        </div>
        {/* nav */}
        <div className='flex justify-between items-center gap-10'>
            <div className='flex justify-between items-center gap-7'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Scedules</p>
            </div>
            <div>
                <button className='flex justify-between items-center gap-2'>
                    <h3>0</h3>
                    <h3>Coin</h3>
                    <img className='w-6' src={coin}/>
                </button>
            </div>
        </div>
      </div>
    );
};

export default Header;
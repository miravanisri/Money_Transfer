import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Search from './Search';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Display = () => {
  const [users, setUser] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/User/bulk?filter=" + filter)
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, [filter]);

  return (
    <div>
      <Search onChange={(e) => setFilter(e.target.value)} />
      <div>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className='mb-3 flex justify-between'>
        <div><Logo syb={user.firstName[0].toUpperCase()} /> <span className='font-bold text-base pl-2'>{user.firstName} {user.lastName}</span></div>
        <div>
          <input className='border border-black rounded-md w-auto p-2 mr-28 bg-black text-white font-semibold cursor-pointer' type="button" value="Send Money" onClick={() => navigate("/Send?id="+user._id+"&name="+user.firstName)} />
        </div>
      </div>
    </div>
  );
}

export default Display;

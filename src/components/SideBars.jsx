import { NavLink } from "react-router-dom";

const SideBars = ({ categories }) => {
  return (
    <div>
      
      <div className="w-56 bg-white shadow-lg rounded-2xl p-6">
        <ul className="space-y-4">
          {/* All Product Link */}
          <li>
            <NavLink
                 to='/'
                  role='tab'
              className={({ isActive }) => `block rounded-3xl ${isActive ? 'bg-[#9538E2] text-white font-semibold text-sm py-3 px-4 rounded-3xl transition-all' : 'block text-gray-500 font-semibold text-sm bg-gray-100 hover:bg-[#9538E2] hover:text-white py-3 px-4 rounded-3xl transition-all '}`
                
              }
            >
              All Products
            </NavLink>
          </li>

          {/* Category Links */}
          {categories.map((category) => (
            <li key={category.category_id}>
              <NavLink
                to={`/cards/${category.category}`}
                 role='tab'
                className={({ isActive }) =>
                  `${isActive ? 'block bg-[#9538E2] text-white font-semibold text-sm py-3 px-4  transition-all rounded-[32px]' : 'block text-gray-500 font-semibold text-sm bg-gray-100 hover:bg-[#9538E2] hover:text-white py-3 px-4 rounded-[32px] transition-all '}`
                }
              >
                {category.category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBars;

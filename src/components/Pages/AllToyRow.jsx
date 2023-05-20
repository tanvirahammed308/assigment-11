
const AllToyRow = ({myToy}) => {
    const {
        
        sellerName,
        email,
        name,
        subCategory,
        price,
        rating,
        quantity,
        photo,
      } = myToy;
    return (
        <tr>
        <th>
          
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{sellerName}</td>
        <td>{email}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>{quantity}</td>
        <td>{subCategory}</td>
        
      </tr>
    );
  };
    


export default AllToyRow;
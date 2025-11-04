import React, {useState} from 'react'

function PostCard(props) {
   const{id, userId, title, body,...rest} = props;
   const [clicked, setClicked] = useState(false);

   console.log(Object.entries(rest));

    return (
    <div className="bg-white p-6 rounded-lg shadow hover:bg-red-500 transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">
        <span className="font-medium"></span> {body}
      </p>
            {/* Menampilkan data tambahan dari rest */}
      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-600">
          <span className="font-medium capitalize">{key}:</span> {value}
        </p>
      ))}
      <button className={`${clicked ? "bg-special-red2" : "bg-gray-01"} text-white p-2 rounded-md`}
      onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
</button>
    </div>
  );
}

export default PostCard
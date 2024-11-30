function TableClients() {
  const clients = [
    {
      id: 1,
      name: "Mark Roberts",
      email: "Mark88@gmail.com",
      job: "Finance advisor",
      rate: "100",
      isActive: true,
    },
    {
      id: 2,
      name: "Alice Thompson",
      email: "alice.thompson@gmail.com",
      job: "Software Engineer",
      rate: "120",
      isActive: true,
    },
    {
      id: 3,
      name: "John Carter",
      email: "john.carter@example.com",
      job: "Marketing Specialist",
      rate: "90",
      isActive: false,
    },
    {
      id: 4,
      name: "Emma White",
      email: "emma.white@outlook.com",
      job: "Graphic Designer",
      rate: "110",
      isActive: true,
    },
    {
      id: 5,
      name: "Samuel Davis",
      email: "sam.davis@company.com",
      job: "Project Manager",
      rate: "130",
      isActive: true,
    },
    {
      id: 6,
      name: "Linda Martinez",
      email: "linda.martinez@yahoo.com",
      job: "Human Resources Manager",
      rate: "95",
      isActive: false,
    },
  ];

  return (
    <div className="mt-20">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Emaill</th>
              <th>Jobb</th>
              <th>Rate</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr className="hover" key={client.id}>
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                  <button
                    className={` btn rounded-full ${
                      client.isActive ? `bg-green-500` : `bg-red-500`
                    }`}
                  ></button>
                </td>
                <td>
                  <button className="btn rounded-lg bg-fuchsia-700  text-white">
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn rounded-lg bg-red-700  text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableClients;

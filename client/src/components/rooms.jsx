import React, { useState } from "react";


const AllRooms = (props) => {
 
  const [nameSearch, setNameSearch] = useState("");
  const [data, setData] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [check, setCheck] = useState(false);


  return (
    <div class="container-fluid h-100">
      <div class="row justify-content-center h-100">
        <div class="col-md-4 col-xl-3 chat">
          <div class="card mb-sm-3 mb-md-0 contacts_card">
            <div class="card-header">
              <div class="input-group">
                <input
                  type="text"
                  placeholder="Search..."
                  name=""
                  class="form-control search"
                  onChange={(e) => {
                    setNameSearch(e.target.value);
                  }}
                />
                <div class="input-group-prepend">
                  <span class="input-group-text search_btn">
                    <i
                      class="fas fa-search"
                      onClick={() => {
                        console.log(true);
                        {
                          props.SearchForRooms(nameSearch);
                        }
                      }}
                    ></i>
                  </span>
                </div>
              </div>
              <div class="input-group">
                <input
                  type="text"
                  placeholder="AddRoom."
                  name=""
                  class="form-control search"
                  onChange={(e) => {
                    setRoomName(e.target.value);
                  }}
                />
                <div class="input-group-prepend">
                  <span class="input-group-text search_btn">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-plus"
                      viewBox="0 0 16 16"
                      onClick={() => {
                        console.log(true);
                        if (roomName === "") {
                          alert("Enter your room NAME");
                        } else {
                          props.addRooms(roomName);
                        }
                      }}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>{" "}
                  </span>
                </div>
              </div>
            </div>

            <div class="card-body contacts_body">
              <ui class="contacts">
                {props.roomsData.map((e) => {
                  return (
                    <li class="active">
                      <div class="d-flex bd-highlight">
                        <div class="img_cont">
                          <img
                            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                            class="rounded-circle user_img"
                          />
                          <span class="online_icon"></span>
                        </div>
                        <div class="user_info">
                          <span
                            onClick={() => {
                              props.setRoomId(e.id);
                              console.log(e.id);
                              props.fetchMessages(e.id);
                              props.roomOne(e.name);
                            }}
                          >
                            {e.name}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                            onClick={(e) => {
                              console.log(true);

                              props.DeletedRooms(e.name);
                            }}
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                          </svg>

                          <button
                            type="button"
                            class="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
update                          </button>

                          <div
                            class="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5
                                    class="modal-title"
                                    id="exampleModalLabel"
                                  >
                                   {e.name}
                                  </h5>
                                  <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
									
								
									
									<input type="text"  onChange={(e)=>{
                                            setUpdatedName(e.target.value)
									}}/>
									
									
									
									
									
									</div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button type="button" class="btn btn-primary" onClick={()=>{
									console.log(e.name,updatedName)
									props.UpdateNameRoom(e.name,updatedName)
								  }}>
                                    Save changes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ui>
            </div>
            <div class="card-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;

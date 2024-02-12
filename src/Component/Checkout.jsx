import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../feature/cartSllice";
import { useNavigate } from "react-router-dom";

export default function QuantityEdit() {
  const navigate = useNavigate();
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCarts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                           Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          
                        </MDBTypography>
                      </div>

                      <hr className="my-4" />

                      {cart.map((item) => (
                        <MDBRow
                          key={item.id}
                          className="mb-4 d-flex justify-content-between align-items-center"
                        >
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              src={item.image}
                              fluid
                              className="rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <MDBTypography tag="h6" className="text-black mb-0">
                              {item.name}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol
                            md="3"
                            lg="3"
                            xl="3"
                            className="d-flex align-items-center"
                          >
                            <MDBBtn color="link" className="px-2">
                              <button
                                onClick={() =>
                                  dispatch(decreaseItemQuantity(item.id))
                                }
                              >
                                <MDBIcon fas icon="minus" />
                              </button>
                            </MDBBtn>
                            <MDBInput
                              type="number"
                              min="0"
                              value={item.quantity}
                              size="sm"
                              onChange={() => null}
                            />
                            <MDBBtn color="link" className="px-2">
                              {" "}
                              <button
                                onClick={() =>
                                  dispatch(increaseItemQuantity(item.id))
                                }
                              >
                                <MDBIcon fas icon="plus" />
                              </button>
                            </MDBBtn>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="text-end">
                            <MDBTypography tag="h6" className="mb-0">
                              {item.price}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <button
                              onClick={() => dispatch(removeItem(item.id))}
                            >
                              remove
                            </button>
                          </MDBCol>
                        </MDBRow>
                      ))}

                      <hr className="my-4" />

                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="#!" className="text-body">
                            <button onClick={()=>navigate(-1)}>
                              <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                              Back to shop
                            </button>
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total Quantity
                        </MDBTypography>
                        <MDBTypography tag="h5">{totalQuantity}</MDBTypography>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">{totalPrice}</MDBTypography>
                      </div>

                      <MDBBtn color="dark" block size="lg" onClick={()=>navigate('/order')}>
                        Order
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

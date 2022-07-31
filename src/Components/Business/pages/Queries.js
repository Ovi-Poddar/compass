import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import QueryItem from "../../Queries/QueryItem";
import MakeQuery from "../../Queries/MakeQuery";
import SideBar from "../Sidebar/Sidebar";
import QueryContext from "../../../Context/Query/QueryContext";
import Card from "react-bootstrap/Card";

export const Queries = (props) => {
  let { business_id } = useParams();

  const context = useContext(QueryContext);
  const { queries, getQueries } = context;

  useEffect(() => {
    getQueries(business_id);
  }, []);

  return (
    <>
      <SideBar>
        <div className="d-flex justify-content-start">
          <MakeQuery showAlert={props.showAlert} business_id={business_id} />
        </div>
        <div className="container">
          <div className="d-flex justify-content-center pt-3 px-4">
            <div className="">
              <div
                className="container my-1 py-4"
                style={{ width: "53rem" }}
              >
                <div className="row d-flex justify-content-start ">
                  <div className="col-md-12 col-lg-10">
                    <Card className="shadow-md">
                      <Card.Body className="p-4">
                        <h4 className="mb-4 text-danger">
                          Recent Queries ({queries.length})
                        </h4>
                        {queries.map((query) => {
                          return (
                            <QueryItem
                              key={query._id}
                              query={query}
                              business_id={business_id}
                              showAlert={props.showAlert}
                            />
                          );
                        })}
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideBar>
    </>
  );
};

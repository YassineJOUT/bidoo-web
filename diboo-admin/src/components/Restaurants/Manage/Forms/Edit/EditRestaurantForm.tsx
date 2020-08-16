import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import _ from "lodash";
import { GET_RESTAURANT_MUTATION } from "../../../../../helpers/gql";
import AddRestaurantContainer from "../../../Add";

interface Props {
  Id: string;
}
const initialState = {
  name: "",
  website: "",
  phone: "",
  postCode: "",
  email: "",
  address: "",
  city: "",
  estimatedTime: "",
  about: "",
  delivery: false,
  pickUp: false,
  dineIn: false,
  commission: "",
  imagePath: "",
  status: true,
};
const EditRestaurantForm: React.FunctionComponent<Props> = (props) => {
  const [Values, setValues] = useState(initialState);
  //const [preview, setPreview] = useState<any>(null);

  const [getRestaurant] = useLazyQuery(GET_RESTAURANT_MUTATION, {
    onCompleted: (data) => {
      setValues(data.getOneRestaurant.data[0]);
    },
  });
  useEffect(() => {
    if (!_.isEmpty(props.Id)) {
      getRestaurant({ variables: { id: props.Id } });
    }
  }, [props.Id, getRestaurant]);
  return (
    <div></div>
    /* 
        <div
          className="modal fade bs-caroussel-modal tabindex= show"
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          aria-modal="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="myExtraLargeModalLabel">
                  Edit Restaurant
                </h5> */
    // <AddRestaurantContainer editValues={Values} />
    /*  <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            </div>
          </div>
        </div> */
  );
};

export default EditRestaurantForm;

import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
    <div>
        This is Edit Page with id:{props.match.params.id}
    </div>
)};

export default EditExpensePage;
export function CardPromoList(props) {
  return (
    <div className="max-w-sm bg-white overflow-hidden shadow sm:rounded-md">
      <div className="px-4 py-2 align-midle text-white bg-indigo-600 text-center sm:px-6">
        <h4 className="text-lg">{` ${props.service} Promotion`}</h4>
      </div>
      <div className="py-3">
        <p className="px-3 text-gray-700 text-base">
          Credits per Service: {props.creditSystem}
        </p>
        <p className="px-3 text-gray-700 text-base">
          Start date:{" "}
          {`${props.launch.slice(8, 10)}/${props.launch.slice(
            5,
            7
          )}/${props.launch.slice(2, 4)}`}
        </p>
        <p className="px-3 text-gray-700 text-base">
          End date:{" "}
          {`${props.deadline.slice(8, 10)}/${props.deadline.slice(
            5,
            7
          )}/${props.deadline.slice(2, 4)}`}
        </p>
      </div>
    </div>
  );
}

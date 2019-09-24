import PropTypes from 'prop-types'


const DataContent = ({
  data
}) => {
  return (
    <div>
        {
            data &&
            data.map((element) => (
                <div key={element.id}>
                   {element.name}
                </div>
            ))
        }
    </div>
  )
}

DataContent.propTypes = {
  data: PropTypes.array
}

export default DataContent
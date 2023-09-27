const ContentView = ({data}) => {
    const {advice, id} = data;
  
    return (
      <div>
        <div className='advice__id'>{`advice #${id}`}</div>
        <div className='advice'>
        {`${advice}`}
        </div>
      </div>
    )
}

export default ContentView;
const ContentView = ({data}) => {
    const {advice, id} = data;
  
    return (
        <div className='advice'>
        {`"${advice}"`}
        </div>
    )
}

export default ContentView;
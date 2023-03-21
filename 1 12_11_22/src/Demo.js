const Demo=()=>{
    
    let date_time=new Date();
    let date=date_time.getDate()+"/"+date_time.getMonth()+"/"+date_time.getFullYear();
    let time=date_time.getHours()+date_time.getMinutes()+date_time.getSeconds();
    let local_time=date_time.toLocaleString();
    let table_of_2=()=>{
        for(var i=0;i<=10;i=i+2){
            return i;
        }
    }

    return(
        <>
            <div>
                {table_of_2}<br></br>
                {date}<br></br>
                {time}<br></br>
                {local_time}
                
            </div>

        </>
    );
}
export default Demo;
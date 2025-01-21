//import './ArrayPrint.css';

function ArrayPrint()
{
    const a=['Pen','Book','Table'];
    return(
        <div>
            <ul>
                {
                    a.map((item,i) => (
                        <li keys='{i}'>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ArrayPrint; 
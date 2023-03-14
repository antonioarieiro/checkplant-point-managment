import React from "react";
import { MarkerItem } from "../../interfaces";
import "./style.scss"
interface literalData {
    literalData:MarkerItem[]
}
const ListContainer: React.FC<literalData> = ({literalData}) => {
    return (
        <div className="list-container">
            <div className="list-header">
                <p>Listagem de pontos</p>
            </div>
            <div className="list-items-body">
                {
                    literalData.length > 0 ?
                    <>
                    {
                    literalData?.map((value: MarkerItem, i :number) => (
                        <div className="body-item"  key={i}>
                           <div className="body-header">
                           <p>Ponto nº </p> 
                           <p>&nbsp; {value.order}</p>
                            </div>
                            <div className="data-info">
                                <p>Criado em:</p>
                                <span>{value.data}</span>
                                <span>{value.hours}</span>
                                </div>
                            </div>
                    ))
                }
                    </>
            : <div className="none-items"> 
                <h3>Sem pontos de monitoramento para exibir no momento</h3>
            </div>    
            }
            </div>
        </div>
    )
}

export default ListContainer
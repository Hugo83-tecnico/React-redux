import { useEffect } from 'react';
import styles from './Busca.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { mudarBusca, resetarBusca } from 'store/reducers/busca';

const Busca = ()=>{
    const busca = useSelector(state => state.busca);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(()=>{
        dispatch(resetarBusca())
    },[location.pathname, dispatch])

    return(
        <div className={styles.busca}>
            <input 
                className={styles.input} 
                placeholder='O que voce procura'
                value={busca}
                onChange={event => dispatch(mudarBusca(event.target.value))}
            />

        </div>
       
    )
}

export default Busca;
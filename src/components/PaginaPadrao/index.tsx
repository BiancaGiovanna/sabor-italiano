import Header from 'components/Header';
import Menu from 'components/Menu';
import {Outlet} from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';

export default function PaginaPadrao(){
	return(
		<>
			<Menu />
			<Header/>
			<div className={stylesTema.container}>
				<Outlet/>
			</div>
		</>
	);
}
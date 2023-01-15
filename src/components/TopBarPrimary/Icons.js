import * as React from 'react';
import {useRef} from 'react';
import './Icons.css';
import DropDownIcon from '../../assets/Dropdown-SVG-Icon-0sfe.svg';
import DropDown from './DropDown'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {activeTool} from '../../actions/index'

const Icons=({ data }) => {

  let dispatch=useDispatch()
  const appC =useSelector((state)=>state.app.appWindow)
  const idx=useSelector((state)=>state.app.activeIcon)
  const [dropDown, setDropDown] = React.useState([false, false, false, false, false, false, false, false, false]);

  

  const [topIcon, setTopIcon] = React.useState([data[0][0].icon,
    data[1][0].icon,
    data[2][0].icon,
    data[3][0].icon,
    data[4][0].icon,
    data[5][0].icon,
    data[6][0].icon,
    data[7][0].icon,
    data[8][0].icon
  ]);

  const [topToolTip, setTopToolTip] = React.useState([data[0][0].desc,
    data[1][0].desc,
    data[2][0].desc,
    data[3][0].desc,
    data[4][0].desc,
    data[5][0].desc,
    data[6][0].desc,
    data[7][0].desc,
    data[8][0].desc
  ]);
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const refs = data.map(() => useRef(null));

  React.useEffect(() => {
    const handleWindowClick = (event: MouseEvent) => {
      if (
        !refs[0].current.contains(event.target) &&
        !refs[1].current.contains(event.target) &&
        !refs[2].current.contains(event.target) &&
        !refs[3].current.contains(event.target) &&
        !refs[4].current.contains(event.target) &&
        !refs[5].current.contains(event.target) &&
        !refs[6].current.contains(event.target) &&
        !refs[7].current.contains(event.target) &&
        !refs[8].current.contains(event.target)
      ) {
        setDropDown([false, false, false, false, false, false, false, false, false]);
        }
    };

    window.addEventListener('click', handleWindowClick);

    return () => window.removeEventListener('click', handleWindowClick);
  });

  function updateTopIcon(index, newIcon, newTooltip) {
    const icon = [...topIcon];
    icon[index] = newIcon;
    setTopIcon(icon);
    const tooltip = [...topToolTip];
    tooltip[index] = newTooltip;
    setTopToolTip(tooltip);
  }
  const toggleDropDown = (index) => {
    const newDropDown= [];
    for (let i = 0; i < 9; i++) {
      if (i === index) {
        newDropDown.push(!dropDown[index]);
      } else {
        newDropDown.push(false);
      }
    }
    setDropDown(newDropDown);
  }

  const createGeom = async (clazz) => {
    const app=await appC
    if (!clazz) app.endConstruction();
    app.beginConstruction(clazz);
    console.log(`create class ${clazz}`);
  };
  
  return (
    <>
      {data.map((group, index) => (
        <div key = {index}>
          <div className="wrapper-icons-dd" style={{backgroundColor: idx===index? "#0C8CE9":null}}>
            <img src={topIcon[index]} alt="icon" className="img-content-dd" title={topToolTip[index]} onClick={() => {dispatch(activeTool(index))
              createGeom(data[index][0].clickFn)}}/>
            <div ref={refs[index]}>
              <div className="dropdown-container" onClick={() => toggleDropDown(index)}>
                <img src={DropDownIcon} alt="dropdown" className="dropdown-icon" />
              </div>
            </div>
          </div>
          {dropDown[index] && <DropDown data={group} id={index * 3} updateIcon={updateTopIcon} />}
        </div>
      ))}
    </>
  );
}  

export default Icons
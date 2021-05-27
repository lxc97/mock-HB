import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import GroupIcon from '@material-ui/icons/Group';
import CategoryIcon from '@material-ui/icons/Category';

const routers = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Add request",
    path: "/add-request",
    icon: <AddIcon />,
  },
  {
    name: "List users",
    path: "/user",
    icon: <GroupIcon />,
  },
  {
    name: "Category",
    path: "/category",
    icon: <CategoryIcon />,
  },
];

export default routers;

import Button from "../components/Button";
import {
  Md3DRotation,
  MdAddToDrive,
  MdAllOut,
  MdAnchor,
  MdAndroid,
} from "react-icons/md";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button secondary rounded outline className={"mb-1 "}>
          <Md3DRotation />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <MdAddToDrive />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <MdAllOut />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <MdAnchor />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <MdAndroid />
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;

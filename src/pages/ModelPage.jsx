import Model from "../components/Model";
import Button from "../components/Button";
import { useState } from "react";

const ModelPage = () => {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const model = (
    <Model onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Model>
  );
  return (
    <div>
      <Button secondary outline onClick={handleOpen}>
        Open Model
      </Button>
      {show && model}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione
        ex accusamus eligendi quam nemo aliquam rerum porro? Dolore magni quod,
        non perferendis sunt atque assumenda magnam vitae minima ea officiis
        voluptas placeat rerum porro tempora nesciunt voluptate ut molestias
        dignissimos quas laborum hic soluta rem? Iure delectus ullam asperiores
        tempora iusto quibusdam quia eius nesciunt quam explicabo quo minima
        tenetur quaerat sunt temporibus animi laboriosam dolore recusandae alias
        quasi porro atque, impedit exercitationem? Nisi accusantium ullam eum
        modi ex facilis rem dolores! Labore laudantium recusandae quis,
        voluptatem tempora perspiciatis ipsum adipisci nulla a, quasi est cumque
        libero dignissimos ipsam.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione
        ex accusamus eligendi quam nemo aliquam rerum porro? Dolore magni quod,
        non perferendis sunt atque assumenda magnam vitae minima ea officiis
        voluptas placeat rerum porro tempora nesciunt voluptate ut molestias
        dignissimos quas laborum hic soluta rem? Iure delectus ullam asperiores
        tempora iusto quibusdam quia eius nesciunt quam explicabo quo minima
        tenetur quaerat sunt temporibus animi laboriosam dolore recusandae alias
        quasi porro atque, impedit exercitationem? Nisi accusantium ullam eum
        modi ex facilis rem dolores! Labore laudantium recusandae quis,
        voluptatem tempora perspiciatis ipsum adipisci nulla a, quasi est cumque
        libero dignissimos ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione
        ex accusamus eligendi quam nemo aliquam rerum porro? Dolore magni quod,
        non perferendis sunt atque assumenda magnam vitae minima ea officiis
        voluptas placeat rerum porro tempora nesciunt voluptate ut molestias
        dignissimos quas laborum hic soluta rem? Iure delectus ullam asperiores
        tempora iusto quibusdam quia eius nesciunt quam explicabo quo minima
        tenetur quaerat sunt temporibus animi laboriosam dolore recusandae alias
        quasi porro atque, impedit exercitationem? Nisi accusantium ullam eum
        modi ex facilis rem dolores! Labore laudantium recusandae quis,
        voluptatem tempora perspiciatis ipsum adipisci nulla a, quasi est cumque
        libero dignissimos ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione
        ex accusamus eligendi quam nemo aliquam rerum porro? Dolore magni quod,
        non perferendis sunt atque assumenda magnam vitae minima ea officiis
        voluptas placeat rerum porro tempora nesciunt voluptate ut molestias
        dignissimos quas laborum hic soluta rem? Iure delectus ullam asperiores
        tempora iusto quibusdam quia eius nesciunt quam explicabo quo minima
        tenetur quaerat sunt temporibus animi laboriosam dolore recusandae alias
        quasi porro atque, impedit exercitationem? Nisi accusantium ullam eum
        modi ex facilis rem dolores! Labore laudantium recusandae quis,
        voluptatem tempora perspiciatis ipsum adipisci nulla a, quasi est cumque
        libero dignissimos ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione
        ex accusamus eligendi quam nemo aliquam rerum porro? Dolore magni quod,
        non perferendis sunt atque assumenda magnam vitae minima ea officiis
        voluptas placeat rerum porro tempora nesciunt voluptate ut molestias
        dignissimos quas laborum hic soluta rem? Iure delectus ullam asperiores
        tempora iusto quibusdam quia eius nesciunt quam explicabo quo minima
        tenetur quaerat sunt temporibus animi laboriosam dolore recusandae alias
        quasi porro atque, impedit exercitationem? Nisi accusantium ullam eum
        modi ex facilis rem dolores! Labore laudantium recusandae quis,
        voluptatem tempora perspiciatis ipsum adipisci nulla a, quasi est cumque
        libero dignissimos ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione
        ex accusamus eligendi quam nemo aliquam rerum porro? Dolore magni quod,
        non perferendis sunt atque assumenda magnam vitae minima ea officiis
        voluptas placeat rerum porro tempora nesciunt voluptate ut molestias
        dignissimos quas laborum hic soluta rem? Iure delectus ullam asperiores
        tempora iusto quibusdam quia eius nesciunt quam explicabo quo minima
        tenetur quaerat sunt temporibus animi laboriosam dolore recusandae alias
        quasi porro atque, impedit exercitationem? Nisi accusantium ullam eum
        modi ex facilis rem dolores! Labore laudantium recusandae quis,
        voluptatem tempora perspiciatis ipsum adipisci nulla a, quasi est cumque
        libero dignissimos ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione
        ex accusamus eligendi quam nemo aliquam rerum porro? Dolore magni quod,
        non perferendis sunt atque assumenda magnam vitae minima ea officiis
        voluptas placeat rerum porro tempora nesciunt voluptate ut molestias
        dignissimos quas laborum hic soluta rem? Iure delectus ullam asperiores
        tempora iusto quibusdam quia eius nesciunt quam explicabo quo minima
        tenetur quaerat sunt temporibus animi laboriosam dolore recusandae alias
        quasi porro atque, impedit exercitationem? Nisi accusantium ullam eum
        modi ex facilis rem dolores! Labore laudantium recusandae quis,
        voluptatem tempora perspiciatis ipsum adipisci nulla a, quasi est cumque
        libero dignissimos ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione
        ex accusamus eligendi quam nemo aliquam rerum porro? Dolore magni quod,
        non perferendis sunt atque assumenda magnam vitae minima ea officiis
        voluptas placeat rerum porro tempora nesciunt voluptate ut molestias
        dignissimos quas laborum hic soluta rem? Iure delectus ullam asperiores
        tempora iusto quibusdam quia eius nesciunt quam explicabo quo minima
        tenetur quaerat sunt temporibus animi laboriosam dolore recusandae alias
        quasi porro atque, impedit exercitationem? Nisi accusantium ullam eum
        modi ex facilis rem dolores! Labore laudantium recusandae quis,
        voluptatem tempora perspiciatis ipsum adipisci nulla a, quasi est cumque
        libero dignissimos ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione
        ex accusamus eligendi quam nemo aliquam rerum porro? Dolore magni quod,
        non perferendis sunt atque assumenda magnam vitae minima ea officiis
        voluptas placeat rerum porro tempora nesciunt voluptate ut molestias
        dignissimos quas laborum hic soluta rem? Iure delectus ullam asperiores
        tempora iusto quibusdam quia eius nesciunt quam explicabo quo minima
        tenetur quaerat sunt temporibus animi laboriosam dolore recusandae alias
        quasi porro atque, impedit exercitationem? Nisi accusantium ullam eum
        modi ex facilis rem dolores! Labore laudantium recusandae quis,
        voluptatem tempora perspiciatis ipsum adipisci nulla a, quasi est cumque
        libero dignissimos ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione
        ex accusamus eligendi quam nemo aliquam rerum porro? Dolore magni quod,
        non perferendis sunt atque assumenda magnam vitae minima ea officiis
        voluptas placeat rerum porro tempora nesciunt voluptate ut molestias
        dignissimos quas laborum hic soluta rem? Iure delectus ullam asperiores
        tempora iusto quibusdam quia eius nesciunt quam explicabo quo minima
        tenetur quaerat sunt temporibus animi laboriosam dolore recusandae alias
        quasi porro atque, impedit exercitationem? Nisi accusantium ullam eum
        modi ex facilis rem dolores! Labore laudantium recusandae quis,
        voluptatem tempora perspiciatis ipsum adipisci nulla a, quasi est cumque
        libero dignissimos ipsam.
      </p>
    </div>
  );
};

export default ModelPage;

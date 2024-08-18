import { Button } from "../components/Button";
import icon from "../assets/test_icon.png"
export const ButtonPage = () => {
  return (
    <>
      <h2 className="p-8">Button Test Page</h2>
      {/* <div className="flex-row space-y-3 p-8"></div> */}
      <div className="flex-row p-8 space-y-3">
        <Button size="xs" label="xs Button" />
        <Button size="sm" label="sm Button" />
        <Button size="md" color="Red_Lighten-1" label="md red Button" />
        <Button size="lg" noHover label="lg Button" />
        <Button size="md" label="Click Me" onClick={() => alert("Button clicked!")} />
        <Button size="lg" outline color="Red_Lighten-1" label="Outlined Button" />
        <Button size="sm" icon={icon} label="icon"/>
      </div>
    </>
  );
}

export default ButtonPage
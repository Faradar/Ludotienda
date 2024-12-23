import { Text, Pressable } from "react-native";

const Buttons = ({ onPress, title, buttonStyle, textStyle, disabled }) => {
  return (
    <Pressable style={buttonStyle} onPress={onPress} disabled={disabled}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

export default Buttons;

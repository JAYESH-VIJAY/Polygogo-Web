import PgDot from "@/assets/forms/PgDot";
import FormInput from "@/components/Input/FormInput";
import { useDrag } from "react-dnd";

const dragData = [
  "Email Address",
  "First Name",
  "Last Name",
  "Phone",
  "Company Name",
  "Street Address",
  "Text",
  "Checkbox",
  "Radio Group",
  "Select Dropdown",
  "Number",
  "Text Area",
  "Marketing Consent",
  "File Upload",
];

/* The code is creating an array called `dragCardData` by mapping over the `dragData` array. For each element in `dragData`, it creates an object with two properties: `id` and `field`. */
export const dragCardData = dragData.map((value, index) => ({
  id: index,
  fieldValue: value,
}));

export default function DragableField({ children, id }: any) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "field",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), // here isDragging return true when any element is dragging and drag is the reference of that element which is dragged by us.
    }),
  }));
  return (
    <div ref={dragRef}>
      <FormInput preffix={<PgDot />}>{children}</FormInput>
    </div>
  );
}

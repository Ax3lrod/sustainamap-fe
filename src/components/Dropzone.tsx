import React, { useRef } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import Typography from "@/components/Typography";

interface DropzoneProps {
  required?: boolean;
  name?: string;
  className?: string;
  placeholder?: string;
  onChange?: (files: File[]) => void;
  onDrop?: (files: File[]) => void;
  label: string;
}

const Dropzone: React.FC<DropzoneProps> = (props) => {
  const {
    required,
    name,
    className = "",
    placeholder = "Upload foto laporan",
    onChange,
    onDrop,
    label,
  } = props;

  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: (incomingFiles: File[]) => {
      if (hiddenInputRef.current) {
        const dataTransfer = new DataTransfer();
        incomingFiles.forEach((v) => {
          dataTransfer.items.add(v);
        });
        hiddenInputRef.current.files = dataTransfer.files;
      }
      if (onChange) onChange(incomingFiles);
      if (onDrop) onDrop(incomingFiles);
    },
    accept: {
      "image/*": [],
    },
  });

  return (
    <div className={`w-full ${className}`}>
      <Typography className="mb-2 font-bold" size="md">
        {label}
        {required && <span className="text-red-500">*</span>}
      </Typography>
      <div
        {...getRootProps({
          className: `flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-[12px] bg-gray-100 cursor-pointer`,
        })}
      >
        <input
          type="file"
          name={name}
          required={required}
          style={{ display: "none" }}
          ref={hiddenInputRef}
        />
        <input {...getInputProps()} />

        <Upload className="w-8 h-8 text-gray-500 mb-2" />
        <p className="text-gray-500">{placeholder}</p>
      </div>

      {acceptedFiles.length > 0 && (
        <aside className="mt-2">
          <h4 className="font-medium">File Terpilih:</h4>
          <ul className="text-sm text-gray-700">
            {acceptedFiles.map((file) => (
              <li key={file.name}>
                {file.name} - {file.size} bytes
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
};

export default Dropzone;

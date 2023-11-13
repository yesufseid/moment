import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <div className="w-full flex justify-center h-128 md:h-129 items-center">
       <CircularProgress />
    </div>
  )
}

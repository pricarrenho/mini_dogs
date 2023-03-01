import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPhotos, photosSelector } from "../../store/photos/reduce";
import * as S from "./styles";

export const PhotosContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const photos = useSelector(photosSelector);

  return (
    <S.Wrapper>
      {photos?.map((photo: any) => (
        <S.Li key={photo.id}>
          <img src={photo.src} alt={photo.title} />
          <h2>{photo.title}</h2>
          <span>{photo.acessos}</span>
        </S.Li>
      ))}
    </S.Wrapper>
  );
};

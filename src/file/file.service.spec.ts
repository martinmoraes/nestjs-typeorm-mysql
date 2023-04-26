import { Test, TestingModule } from '@nestjs/testing';
import { FileService } from './file.service';
import { getPhoto } from '../testing/get-photo.mock';
import { BadRequestException } from '@nestjs/common';

describe('FileService', () => {
  let fileService: FileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileService],
    }).compile();

    fileService = module.get<FileService>(FileService);
  });

  it('Validar a definição', () => {
    expect(fileService).toBeDefined();
  });

  describe('Teste do File Service', () => {
    it('upload method', async () => {
      const photo: Express.Multer.File = await getPhoto();
      const filename = 'photo-test.pdf';

      const { sucess } = await fileService.upload(photo, filename);

      expect(sucess).toBeTruthy();
    });

    it('upload method without filename', async () => {
      const photo: Express.Multer.File = await getPhoto();
      const filename = '';

      await expect(fileService.upload(photo, filename)).rejects.toThrow(
        BadRequestException,
      );
    });
  });
});

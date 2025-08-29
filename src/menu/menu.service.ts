import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';
import { MenuDto } from './dto/menu.dto';

@Injectable()
export class MenuService {
  constructor(@InjectRepository(Menu) private menuRepo: Repository<Menu>) {}

  async getAllMenu() {
    try {
      const menus = await this.menuRepo.createQueryBuilder('menu').getMany();
      return menus;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async createMenu(menu: MenuDto) {
    const existingMenu = await this.menuRepo.findOne({
      where: { name: menu.name },
    });
    if (existingMenu) {
      throw new BadRequestException('Menu with this name already exists');
    }

    try {
      // console.log('menu', menu);
      const res = await this.menuRepo.save(menu);
      return res;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async updateMenu(id: number, menu: MenuDto) {
    const existingMenu = await this.menuRepo.findOne({ where: { id } });
    if (!existingMenu) {
      throw new BadRequestException('Menu not found');
    }
    const payload = {
      id,
      ...menu,
    };
    try {
      const res = await this.menuRepo.save(payload);
      return res;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async deleteMenu(id: number, menu: MenuDto) {
    const existingMenu = await this.menuRepo.findOne({ where: { id } });
    if (!existingMenu) {
      throw new BadRequestException('Menu not found');
    }
    const payload = {
      id,
      ...menu,
    };
    try {
      const res = await this.menuRepo.save(payload);
      return res;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}

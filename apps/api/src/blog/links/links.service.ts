import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { CreateLinkInput } from './dto/create-link.input';
import { UpdateLinkInput } from './dto/update-link.input';
import { LinksPaginationInput } from './dto/links.pagination';

@Injectable()
export class LinksService {
  constructor(private readonly prisma: PrismaService) {}

  create(createLinkInput: CreateLinkInput) {
    return this.prisma.blog_links.create({
      data: {
        name: createLinkInput.name,
        url: createLinkInput.url,
        logo: createLinkInput.logo,
        sort: createLinkInput.sort,
        status: createLinkInput.status,
      },
    });
  }

  findAll(pagination: LinksPaginationInput) {
    const { skip, take, where } = pagination;
    return this.prisma.blog_links.findMany({
      skip,
      take,
      where,
      orderBy: {
        sort: 'asc',
      },
    });
  }

  findOne(uid: string) {
    return this.prisma.blog_links.findUnique({
      where: { uid },
    });
  }

  update(uid: string, updateLinkInput: UpdateLinkInput) {
    return this.prisma.blog_links.update({
      where: { uid },
      data: {
        name: updateLinkInput.name,
        url: updateLinkInput.url,
        logo: updateLinkInput.logo,
        sort: updateLinkInput.sort,
        status: updateLinkInput.status,
      },
    });
  }

  remove(uid: string) {
    return this.prisma.blog_links.delete({
      where: { uid },
    });
  }
} 
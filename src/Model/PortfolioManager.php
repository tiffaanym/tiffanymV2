<?php
/**
 * Created by PhpStorm.
 * User: sylvain
 * Date: 07/03/18
 * Time: 18:20
 */

namespace Model;


class PortfolioManager extends EntityManager
{
    const TABLE = 'portfolio';


    public function __construct()
    {
        parent::__construct(self::TABLE);
    }

}